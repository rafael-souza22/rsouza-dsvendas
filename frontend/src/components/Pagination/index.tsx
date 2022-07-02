import { SalePage } from "types/Sale";

type PaginationProps = {
    page: SalePage,
    pagesList: number[],
    onPageChange: Function
}

/* eslint-disable */

export default function Pagination( { page, pagesList, onPageChange }: PaginationProps ) {
    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="d-flex justify-content-center list-unstyled">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    { 
                        pagesList.map( p => (
                            <li key={p} className={`page-item ${page.number == p ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => onPageChange(p)}>{p+1}</button>
                            </li>
                        )) 
                    }
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}