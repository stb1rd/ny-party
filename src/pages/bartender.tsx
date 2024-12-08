import Head from 'next/head';
import localFont from 'next/font/local';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { bar } from '@/bar';
import { Fragment } from 'react';
import { BASE_PATH } from '.';

const robotoCondensed = localFont({
  src: [
    {
      path: './fonts/RobotoCondensed-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/RobotoCondensed-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-roboto-condensed',
  weight: '900',
});

export default function Home() {
  return (
    <>
      <Head>
        <title>E+ COCKTAIL BAR</title>
        <meta name="description" content="E+ COCKTAIL BAR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${robotoCondensed.variable}`}>
        <main className={styles.main}>
          <header>
            <Image className={styles.logo} src={`${BASE_PATH}/logo-w-text.svg`} alt="" width={379} height={37} />
          </header>
          {bar.map((barItem) => (
            <Fragment key={barItem.categoryName}>
              <h2>{barItem.categoryName}</h2>
              <section>
                {barItem.drinks.map((drinkItem) => (
                  <article key={drinkItem.title}>
                    <h3>{drinkItem.title}</h3>
                    <div>
                      {[...drinkItem.iconsPublic, ...(drinkItem.iconsBartender || [])].map((iconName) => (
                        <Image
                          key={iconName}
                          src={`${BASE_PATH}/icons/${iconName}.svg`}
                          className={styles.icon}
                          alt=""
                          width="30"
                          height="36"
                        />
                      ))}
                      <span>{drinkItem.tastes}</span>
                    </div>
                    <div>{drinkItem.recipe}</div>
                    {!!drinkItem.decoration && <p>{drinkItem.decoration}</p>}
                  </article>
                ))}
              </section>
            </Fragment>
          ))}
        </main>
      </div>
    </>
  );
}
