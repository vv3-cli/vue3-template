export const getPlat = () => {
    let platPc = true;

    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        platPc = false;
    } else if (/(Android)/i.test(navigator.userAgent)) {
        platPc = false;
    }
    return platPc;
};
