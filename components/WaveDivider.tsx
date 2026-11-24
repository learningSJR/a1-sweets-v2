import styles from './WaveDivider.module.css'
export default function WaveDivider({from,to}:{from:string;to:string}) {
 const tile = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="36" viewBox="0 0 96 36"><path d="M0 18 Q24 -14 48 18 T96 18 V36 H0Z" fill="${to}"/></svg>`
 return <div aria-hidden="true" className={styles.wave} style={{backgroundColor:from,backgroundImage:`url("data:image/svg+xml,${encodeURIComponent(tile)}")`}}/>
}
