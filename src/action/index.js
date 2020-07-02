export const changeCompleted = (id, checked) => {
    return {
        type: "CHANGE_COMPLETED",
        id: id,
        checked: checked
    }
}

export const increment = (number) => {
    console.log(number)
    return {
        type: "INCREMENT",
        data: number
    }
}

export const decrement = (number) => {
    return {
        type: "DECREMENT",
        data: number
    }
}
