export const PlaySvg = () =>{
    const svgStyle = {
        position: 'absolute',
        top: '50%',
        left: '50% ',
        transform: 'translate(-50%, -50%)',
      };

    return(
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" style={svgStyle}>
<circle cx="40" cy="40" r="40" fill="#FF5A30"/>
<path d="M51.5 39.134C52.1667 39.5189 52.1667 40.4811 51.5 40.866L35 50.3923C34.3333 50.7772 33.5 50.2961 33.5 49.5263L33.5 30.4737C33.5 29.7039 34.3333 29.2228 35 29.6077L51.5 39.134Z" fill="white"/>
</svg>
    )
}

export default PlaySvg;