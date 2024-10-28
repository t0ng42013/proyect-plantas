import style from './style/InfoEnvios.module.css'

export const InformacionEnvios = () => {
    return (
        <div className={style['shipping-info']}>
            <div className={style['section-header']}>
                <i className={style['fas fa-truck']}></i>
                <h3>Información de envío</h3>
            </div>
            <div className={style['shipping-grid']}>
                <div className={style['info-item']}>
                    <p className={style['label']}>Dirección:</p>
                    <p>Calle Principal 123</p>
                </div>
                <div className={style['info-item']}>
                    <p className={style['label']}>Estado:</p>
                    <p>En preparación</p>
                </div>
                <div className={style['info-item']}>
                    <p className={style['label']}>Entrega estimada:</p>
                    <p>-- /-- /----</p>
                </div>
            </div>
        </div>
    )
}
