import styles from './FoodIllustration.module.css'
export default function FoodIllustration({
  kind = 'chef',
}: {
  kind?: 'chef' | 'snack' | 'spice'
}) {
  return (
    <svg
      className={styles.art}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === 'chef' ? (
        <>
          <path
            d="M58 76C28 74 29 35 57 36C65 9 104 8 116 32C147 18 174 46 154 69L142 78V92H58Z"
            fill="#fff9ed"
          />
          <path d="M62 92V117C62 145 83 158 100 158S138 145 138 117V92M75 63V76M100 53V76M125 62V76" />
          <path d="M79 111h1m40 0h1M88 134q12 12 24 0M100 113l-4 10h7M80 154l-8 15-32 13M120 154l8 15 32 13M72 169l28 18 28-18" />
          <path d="M28 104l-12-5m12 19-14 4m158-18 12-5m-12 19 14 4" />
        </>
      ) : kind === 'snack' ? (
        <>
          <path d="M27 146Q22 136 34 119L92 35Q100 24 110 39L171 126Q182 145 164 150Z" />
          <path d="M39 132Q90 112 102 48M102 48q20 66 60 86M51 144q50-23 99 0M20 164q80 25 160 0M43 75l-12-10M151 62l12-12" />
        </>
      ) : (
        <>
          <path d="M32 105Q65 156 100 105Q135 156 168 105M32 105h136M49 131q51 55 102 0M72 86q-20-20 0-40t0-30M100 86q-20-20 0-40t0-30M128 86q-20-20 0-40t0-30" />
          <path d="M25 155l150 0" />
        </>
      )}
    </svg>
  )
}
