"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./preloader.module.scss";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.preloaderContainer}>
      <div className={styles.preloaderContentWrapper}>
        <div className={styles.logoWrapperBox}>
          <div className={styles.logoBorderBox}>
            <Image
              src="/images/logo.png"
              alt="Varchas Logo"
              width={120}
              height={48}
              priority
            />
          </div>
        </div>
        <p className={styles.loadingText}>WELCOME TO VARCHAS ...</p>
      </div>
    </div>
  );
};

export default Preloader;
