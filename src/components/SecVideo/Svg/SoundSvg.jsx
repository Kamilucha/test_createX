export const SoundSvg = () =>{
    const svgStyle = {
        position: 'absolute',
        top: '90%',
        left: '10% ',
        transform: 'translate(-50%, -50%)',
      };

    return(
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={svgStyle}>
  <path fillRule="evenodd" clipRule="evenodd" d="M12.0003 15.5827C12.5837 15.9994 13.3337 15.666 13.3337 14.916V11.166L10.2503 14.2493L12.0003 15.5827Z" fill="white"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M17.2503 4.41602C16.917 4.08268 16.417 4.08268 16.0837 4.41602L13.3337 7.16602V5.08268C13.3337 4.41602 12.5003 3.99935 12.0003 4.41602L9.66699 6.33268C9.33366 6.49935 9.00033 6.66602 8.58366 6.66602H6.66699C5.75033 6.66602 5.00033 7.41602 5.00033 8.33268V11.666C5.00033 12.5827 5.75033 13.3327 6.66699 13.3327H7.16699L4.41699 16.0827C4.08366 16.416 4.08366 16.916 4.41699 17.2494C4.75033 17.5827 5.25033 17.5827 5.58366 17.2494L17.2503 5.58268C17.5837 5.24935 17.5837 4.74935 17.2503 4.41602Z" fill="white"/>
</svg>
    )
}

export default SoundSvg;