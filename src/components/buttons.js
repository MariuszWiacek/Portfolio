import { Link } from "react-router-dom";

const Buttons = () => (
<ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
	<Link to="/about" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		
		About me
		</button></Link>
		<Link to="/projects" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		
		My Projects
		</button></Link>
		<Link to="/contact" style={{ textDecoration: 'none' }}><button class="button-53" role="button">
		
		Contact me
		</button></Link>
		</ul> )

        export default Buttons