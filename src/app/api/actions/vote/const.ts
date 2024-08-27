import { PublicKey } from "@solana/web3.js";

// Default validator public key for voting
export const DEFAULT_VALIDATOR_VOTE_PUBKEY: PublicKey = new PublicKey(
  "VALIDATOR_VOTE_PUBLIC_KEY_PLACEHOLDER" // Replace with your actual default validator public key
);

// Default vote amount (e.g., 500.000.000 BARK)
export const DEFAULT_VOTE_AMOUNT: number = 500.000.000; // Amount in BARK