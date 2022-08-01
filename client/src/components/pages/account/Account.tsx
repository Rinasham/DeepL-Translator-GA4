import { useEffect } from "react";
import { useAccount } from "../../../hooks/useAccount";
import styles from "./Account.module.css";

export default function Account() {
  const { fetchUser } = useAccount();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <p>account</p>
    </div>
  );
}
