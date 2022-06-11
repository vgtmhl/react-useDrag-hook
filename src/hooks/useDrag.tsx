import React from 'react'

const initialState = {
    diffX: 0,
    diffY: 0,
    dragging: false,
    styles: {
        position: 'absolute',
    }
}

const useDrag = (child: React.ReactNode) => {

    const [state, setState] = React.useState<typeof initialState>(initialState)

    const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
        /** Calculate the difference between the cursor and the initial position (top left) */
        const diffX = e.screenX - e.currentTarget.getBoundingClientRect().left;
        const diffY = e.screenY - e.currentTarget.getBoundingClientRect().top;
        const dragging = true;

        setState(oldState => ({
            ...oldState,
            diffX,
            diffY,
            dragging
        }))
    }

    const onDragStop = (e: React.MouseEvent<HTMLDivElement>) => {
        setState(oldState => ({
            ...oldState,
            dragging: false
        }))
    }


    const onDragging = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!state.dragging) return;

        let left = e.screenX - state.diffX;
        let top = e.screenY - state.diffY;

        setState(oldState => ({
            ...oldState,
            styles: {
                ...oldState.styles,
                left,
                top
            }
        }))
    }

    return (
        <div
            style={state.styles as any}
            onMouseDown={onDragStart}
            onMouseMove={onDragging}
            onMouseUp={onDragStop}
        >
            {child}
        </div >
    )
}
export default useDrag