import React, { useMemo, useEffect} from 'react'
import './style.css'
import Table from "../Table/Table";


export default function NotesList(props) {
    
        const { notesList, handleEdit, handleDelete } = props

        const EditIcon = ({ values }) => {
            // Loop through the array and create a badge-like component instead of a comma-separated string
            return (
                <span className="mx-2 text-success" onClick={()=>handleEdit(values)}>
                        <i className="fa fa-pen"/>
                 </span>
                  );
                };
        const DeleteIcon = ({ values }) => {
                    // Loop through the array and create a badge-like component instead of a comma-separated string
                    return (
                        <span className="mx-2 text-danger" onClick={()=>handleDelete(values)}>
                            <i className="fa fa-trash"/>
                    </span>
                          );
                        };        
        const columns = useMemo(
            () => [
              {
                // first group - TV Show
                Header: "Customer Details",
                // First group columns
                columns: [
                  {
                    Header: "Name",
                    accessor: "name"
                  },
                  {
                    Header: "Email",
                    accessor: "email"
                  }
                ]
              },
              {
                // Second group - Details
                Header: "Actions",
                // Second group columns
                columns: [
                  {
                    Header: "Edit",
                    accessor: "itemedit",
                    Cell: ({ cell: { value } }) => <EditIcon values={value} />
                  },
                  {
                    Header: "Delete",
                    accessor: "itemdelete",
                    Cell: ({ cell: { value } }) => <DeleteIcon values={value} />
                  }
                ]
              }
            ],
            []
          );
        const data = notesList.map(item => (
           {itemedit: item,itemdelete: item,name:item.name,email:item.email,id:item.id}
         )) ;
        //console.log("data transforme: ",data)
        useEffect(() => {
            
        },[])
        return (
            <div className="notes-list-wrapper">
                <h1>Customer Info</h1>
               
                <div className="App">
                  <Table columns={columns} data={data} />
               </div>
            </div>
        )
    }
