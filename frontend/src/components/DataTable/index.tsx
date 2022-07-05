import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react"
import { SalePage } from "types/Sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

export default function Datatable() {

    const [activePage, setActivePage] = useState(0);
    const [pages, setPages] = useState<number[]>([]);
    const [page, setPage] = useState<SalePage>({
        first: true,
        number: 0,
        totalPages: 0,
        totalElements: 0,
        last: true,
    });

    useEffect(() => {
        axios.get<SalePage>(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then(res => {
                setPage(res.data);
                let i;
                const pagesList: number[] = [];
                for(i = 0 ; i < res.data.totalPages; i++){
                    pagesList.push(i);
                }
                setPages(pagesList);
            })
    }, [activePage])

    function pageChange(index: number){
        setActivePage(index);
    }

    return (
        <>
            <Pagination page={page} pagesList={pages} onPageChange={pageChange}/>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes Visitados</th>
                            <th>Negócios Fechados</th>
                            <th>Valor(R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, 'dd/MM/yyyy')}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}