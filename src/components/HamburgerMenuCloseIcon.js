import React from "react";

import Icon from "@components/icon";

const HamburgerMenuCloseIcon = React.forwardRef((props, ref) => (
	<div className="
					w-full
					flex
					h-20
					lg:hidden
					">
		<button
			ref={ref}
			type="button"
			className="
						text-white
						ml-auto
						my-auto
						transform
						transition-all
						duration-150
						focus:outline-none
						hover:scale-75
						focus:scale-75
						hover:rotate-45
						focus:rotate-45
						"
			aria-label="close navigation menu"
			onClick={() => props.setIsOpen(false)}
		>
			<div className="h-12 w-12 fill-current">
				<Icon name="menuClose" />
			</div>
		</button>
	</div>
));

export default HamburgerMenuCloseIcon;
