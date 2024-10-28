export const formatSimpleDate = (isoDate:Date)=> {
    return new Date(isoDate).toISOString().split('T')[0];
}

export const formatLongDate = (isoDate:Date ) => {
    return new Date(isoDate).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}