const AbateLogo = props => {
  const { color, width } = props

  return (
    <figure className={width} alt='Abate cursive logo'>
      <svg viewBox="0 0 122 45" className={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M73.8973 40.6943C72.1058 40.8249 71.6291 39.8961 71.6291 38.2941C71.6291 35.4548 74.8323 29.9219 75.8515 28.3202C76.3612 27.5192 76.4339 27.2282 76.4339 27.0096C76.4339 26.2088 75.706 25.5536 74.9778 25.5536C74.5411 25.5536 73.9587 25.772 73.6674 26.2816C67.8432 36.4741 62.2373 40.1141 59.6893 40.1141C58.4517 40.1141 57.1413 39.1678 57.1413 35.7463C57.1413 29.3392 63.9848 22.8599 70.5369 22.8599C72.4297 22.8599 74.3225 23.4423 76.0698 24.7529C76.3611 24.9712 76.6522 25.044 76.9435 25.044C77.7442 25.044 78.3994 24.316 78.3994 23.588C78.3994 23.1512 78.2539 22.7871 77.817 22.4232C75.5601 20.6759 73.0849 19.9477 70.5369 19.9477C69.1009 19.9477 67.661 20.1914 66.263 20.6352C65.2762 20.9484 64.2475 21.1019 63.2135 21.1531C57.0222 21.4598 49.2718 21.9136 43.163 21.9136C42.0709 21.9136 41.4885 22.496 41.4885 23.224C41.4885 23.6608 41.7798 24.1705 42.3622 24.6071C44.4736 25.9905 45.4926 28.3202 45.4926 31.0867C45.4926 36.6196 41.6342 42.0072 37.266 42.0072C35.5187 42.0072 33.1163 40.8423 33.1163 36.9112C33.1163 35.0907 33.6987 32.2516 34.718 29.0482C40.7605 22.0591 50.9529 8.95482 50.9529 2.98486C50.9529 1.45618 50.152 0 48.4775 0C48.1864 0 47.8223 0.0727945 47.604 0.145541C42.1439 2.18412 35.737 16.7446 32.4611 27.1554L31.4532 30.725C31.4252 30.7493 31.395 30.7686 31.3681 30.7954L30.2033 31.9603C29.3297 32.8338 25.6895 36.7652 23.0687 38.5852C22.2677 39.1678 21.5398 39.532 21.0301 39.532C20.3749 39.532 20.011 38.9493 20.011 37.3478C20.011 32.9796 23.0687 27.3009 23.5783 26.573L24.8887 24.6799C25.107 24.3888 25.1798 24.1705 25.1798 23.8792C25.1798 23.0784 24.5246 22.4232 23.7238 22.4232C23.3597 22.4232 22.8501 22.5688 22.559 23.0056L20.8117 25.4808C19.5013 23.3695 17.5355 21.8408 14.769 21.8408C7.12492 21.8408 0.5 31.0138 0.5 38.2941C0.5 40.9149 1.51931 44.4824 5.23212 44.4824C8.79938 44.4824 13.4588 39.823 17.4629 34.7271C17.1719 35.7464 17.0988 36.5471 17.0988 37.3479C17.0988 39.6775 18.1909 42.3713 21.103 42.3713C23.8529 42.3713 27.6397 38.7384 30.265 36.0393C30.2274 36.3675 30.2043 36.6626 30.2043 36.9112C30.2043 42.5894 33.9902 44.9191 37.2661 44.9191C44.0368 44.9191 48.4048 37.2748 48.4048 31.0868C48.4048 28.9027 47.8952 26.6457 46.6576 24.8257C51.0787 24.7228 55.6429 24.6193 59.7905 24.3884C56.4844 27.3539 54.2293 31.4792 54.2293 35.7464C54.2293 39.6775 55.9037 43.0265 59.6894 43.0265C62.3104 43.0265 65.8777 40.7694 68.717 37.639C68.6442 38.2216 68.5712 38.7313 68.5712 39.2409C68.5712 41.7887 69.8819 43.4631 73.2306 43.4631C78.0635 43.4631 81.8202 39.6984 85.1428 36.2156C85.1139 36.5546 85.0987 36.8839 85.0987 37.2023C85.0987 41.5705 87.938 43.9002 90.9229 43.9002C94.0667 43.9002 97.459 42.2367 104.144 35.8126C104.726 40.7629 107.561 43.2446 111.38 43.2446C114.657 43.2446 118.297 41.352 121.063 38.8038C121.42 38.4473 121.497 38.0913 121.5 37.7349C121.503 37.3722 121.397 37.014 121.166 36.7345C120.591 36.0397 119.643 36.0014 119.025 36.6196C116.622 38.9493 113.637 40.3327 111.38 40.3327C109.123 40.3327 107.012 39.0223 106.94 33.8533C111.89 32.9068 121.427 29.4123 121.427 24.0977C121.427 21.1854 118.806 19.5112 116.04 19.5112C110.045 19.5112 105.252 25.9603 104.231 31.6834L103.954 31.9603C95.9464 39.9686 93.0342 40.9879 90.9229 40.9879C89.6125 40.9879 88.0107 40.1142 88.0107 37.2023C88.0107 35.4548 88.6659 32.9068 90.4859 29.4851L93.5438 23.7337H101.479C102.426 23.7337 102.935 23.0057 102.935 22.2775C102.935 21.5493 102.426 20.8216 101.479 20.8216H95.1453L102.717 6.69795C102.863 6.47938 102.863 6.1883 102.863 5.96977C102.863 5.16903 102.134 4.58663 101.334 4.58663C100.897 4.58663 100.387 4.80496 100.096 5.38737L91.7964 20.8216H87.8652C86.9187 20.8216 86.4091 21.5495 86.4091 22.2775C86.4091 23.0055 86.9187 23.7337 87.8652 23.7337H90.2677C90.2677 23.7337 88.0934 27.9418 82.8161 34.3705C78.7603 39.3113 76.7412 40.487 73.8974 40.6943L73.8973 40.6943ZM47.9682 3.27618C47.6041 7.20732 42.5807 14.6332 37.703 20.8215C40.7607 13.4684 44.7648 6.1155 47.9682 3.27618ZM5.23212 41.5705C4.2856 41.5705 3.41207 40.7693 3.41207 38.2941C3.41207 32.0331 9.23625 24.7529 14.7691 24.7529C16.9532 24.7529 18.1908 26.3544 18.9191 28.1744C14.6236 34.1444 8.58105 41.5705 5.23212 41.5705ZM116.04 22.4232C117.86 22.4232 118.515 23.3695 118.515 24.0977C118.515 27.0096 111.526 29.7034 107.522 30.7226C108.759 26.7184 112.108 22.4232 116.04 22.4232L116.04 22.4232Z" />
      </svg>
    </figure>
  )
}

AbateLogo.defaultProps = {
  color: 'fill-black dark:fill-white',
  width: 'w-32'
}

export default AbateLogo;