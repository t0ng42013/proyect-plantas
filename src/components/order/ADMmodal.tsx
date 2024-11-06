
import { ChangeEvent,  useState } from "react";
import { BiX } from "react-icons/bi";
import { useAppDispatch } from "../../hooks/hooks";
import { actionMap } from "../../utils/actionMap";




import style from './style/ADModal.module.css';
import { showToast } from "../../hooks/useConfirmationDialog";
export const ADMmodal = ({ data, handleModal, action,  selected, entityType }) => {
   const dispatch = useAppDispatch();
    const [newEntity, setNewEntity] = useState(selected );    

    if (!data || Object.keys(data).length === 0) {
        return <div>No data available</div>;
    }

    const renderInput = () => {  
        return Object.entries(newEntity).map(([key, value], index: number) => {
            const inputType = typeof value === 'number' ? 'number' : 'text';
            
            if (key === 'id' || key === 'created_at' || key === 'updated_at'|| key === 'userID' || key === 'userName') {
                return null;
            }
            return (
                <div key={index}>
                    <label className={style.modalCardLabel}>{key}:</label>
                    <input
                        type={inputType}
                        name={key}
                        value={newEntity[key]}
                        onChange={handleInputChange}
                        className={style.modalCardInput}
                    />
                </div>
            );
        });
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {      
          setNewEntity({
            ...newEntity,
            [e.target.name]: e.target.value})     
    }


    const handleSubmit = () => {
      const actionFunc = actionMap[entityType]?.[action];
        if(actionFunc) dispatch(actionFunc(newEntity));
        showToast(`Producto ${action === 'delete' ? 'eliminado' : 'guardado'}`);
       handleModal();
    }

    return (
        <>
            <div className={style.overlay}></div>

            <div className={style.cardModalContainer}>
                <div className={style.modalCard}>
                    <div className={style.modalTitle}>
                        <h2 className="text-xl font-bold">
                            {action === 'create' ? 'Crear' : action === 'update' ? 'Modificar' : 'Eliminar'} Producto</h2>
                        <button onClick={handleModal } className="text-gray-500 hover:text-gray-700">
                            <BiX size={24} />
                        </button>
                    </div>
                    <div className={style.modalCardBody}>

                        {
                         data && renderInput()                         
                        }

                    </div>

                    <div className={style.modalCardFooter}>
                        <button
                            onClick={handleModal}
                            className={style.btnDanger}
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSubmit}
                            className={style.btnPrimary}
                        >
                            {action === 'delete' ? 'Eliminar' : 'Guardar'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
