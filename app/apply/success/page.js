"use client"; // Ensure this directive is at the top of the file

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormStore } from "@/public/store/FormData";
import Preloader from "@/components/elements/Preloader";

// Dynamically import the Confetti component with SSR disabled
const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function PlaidSuccess() {
  const router = useRouter();
  const { updateFormData, setCurrentStep } = useFormStore();
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Set window dimensions only on the client side
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handlePlaidSuccess = async () => {
      const { public_token, metadata } = router.query;

      if (public_token) {
        try {
          const response = await fetch("/api/plaid/exchange-public-token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ public_token }),
          });

          if (!response.ok) {
            throw new Error("Failed to exchange token");
          }

          const data = await response.json();
          updateFormData({ plaidAccessToken: data.access_token });
          setCurrentStep(1); // Adjust this step as needed
          router.push("/apply");
        } catch (error) {
          console.error("Error handling Plaid success:", error);
        }
      }
    };

    handlePlaidSuccess();
  }, [router.query]);

  return (
    <div>
      <h1>Success!</h1>
      <p>Your bank account has been connected.</p>
      {windowDimension.width > 0 && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={400}
        />
      )}
    </div>
  );
}
