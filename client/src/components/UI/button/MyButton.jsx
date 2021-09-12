import classes from './MyButton.module.css'

const MyButton = (props) => {

    return (

        <button
        className={classes.MyButton + ' ' + props.name}
        style={{
            minWidth: props.width,
            fontSize: props.fontSize,
            background: props.background,
            color: props.color,
            transform: 'scale('+props.scale+') ',
            marginBottom: (props.scale*100)/2-50+'px',
            marginRight: (props.scale*100)/2+'px',
            ...props.styles
        }}
        {...props} 
        >{props.children}</button>

    )
}

export default MyButton;