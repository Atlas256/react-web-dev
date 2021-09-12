import React from "react";
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {

    return (
        <input className={classes.MyInput + ' ' + props.name}
            style={{
                width: props.width,
                background: props.background,
                color: props.color,
                fontSize: props.fontSize,
                transform: 'scale(' + props.scale + ') ',
                marginBottom: (props.scale * 100) / 2 - 50 + 'px',
                marginRight: (props.scale * 100) / 2 + 'px',
                ...props.styles
            }}
            {...props}
            ref={ref}
        />
    )
});

export default MyInput;