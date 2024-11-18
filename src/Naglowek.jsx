import './Naglowek.css';
const naglowek = ["Nr", "Godzina", "Poniedziałek", "Wtorek", "Środa", 'Czwartek', "Piątek"];
function Naglowek()
{
    return(
        <>
            <thead>
                <tr className='naglowek'>
               {naglowek.map((e) => <td key={e}>{e}</td>)}
               </tr>
            </thead>
        </>
    )
};

export default Naglowek;