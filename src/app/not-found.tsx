'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as styles from '../page/notFound/NotFound.css';
import notFoundGraphic from '../asset/image/notFoundGraphic.png';

export default function NotFound() {
  return (
    <section className={styles.notFoundContainer}>
      <article className={styles.notFoundeWrapper}>
        <Image 
          className={styles.notFoundImage} 
          src={notFoundGraphic} 
          alt="404" 
        />
        <div className={styles.notFoundTextWrapper}>
          <h1 className={styles.nothingText}>앗, 이곳엔 아무것도 없어요</h1>
          <Link href="/main" className={styles.goHomeText}>
            홈으로 가기
          </Link>
        </div>
      </article>
    </section>
  );
} 