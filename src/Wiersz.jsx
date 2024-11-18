import './Wiersz.css';

function Wiersz(props)
{
    return(
        <>
            <tbody>
                <tr>
                {Object.keys(props.dane).map(
                    (e) => <td key={e} className={e}>{props.dane[e]}</td>
                    )}
                </tr>
            </tbody>
        </>
    );
};
export default Wiersz;