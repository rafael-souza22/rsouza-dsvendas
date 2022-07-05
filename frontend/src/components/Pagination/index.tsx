import { SalePage } from "types/Sale";

type PaginationProps = {
    page: SalePage,
    pagesList: number[],
    onPageChange: Function
}

export default function Pagination({ page, pagesList, onPageChange }: PaginationProps) {
    return (
        < div className="pagination justify-content-center" >
            <nav aria-label="paginas">
                <ul className="pagination justify-content-center pagination-sm">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button> 
                    </li>
                    {
                        pagesList.map(p => (
                            <li key={p} className={`page-item ${page.number === p ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => onPageChange(p)}>{p + 1}</button>
                            </li>
                        ))
                    }
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div >
    )
}