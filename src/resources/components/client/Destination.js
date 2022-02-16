// import { Link } from "react-router-dom";

const Destination = ({ data: { title, cover } }) => {
	return (
		<div
			className='destination cursor'
			style={{
				background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cover})`,
			}}
		>
			<div className='container'>
				<p className='text-white font-sz-large font-wg-500'>{title}</p>
				<div className='line'>.</div>

				{/* <div className="links mt-5">
          <Link to="/hotel">(7) Hotels</Link>
          <Link to="/space">(7) Spaces</Link>
          <Link to="/tour">(7) Tours</Link>
          <Link to="/car">(7) Cars</Link>
          <Link to="/event">(7) Events</Link>
        </div> */}
			</div>
		</div>
	);
};

export default Destination;
