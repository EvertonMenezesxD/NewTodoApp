
import React from 'react'

export default props =>
<React.Fragment>
<h2>TESTE</h2>
<h1>Teste React {props.nome}, idade {props.idade}</h1>
</React.Fragment>


// Bom para Array de Elementos JSX
// export default props =>[
// <h2>TESTE</h2>
// <h1>Teste React {props.nome}, idade {props.idade}</h1>
// ]

//Utilizar para envolver os elementos sem a necessidade de uma Div
// export default props =>
// <React.Fragment>
// <h2>TESTE</h2>
// <h1>Teste React {props.nome}, idade {props.idade}</h1>
// </React.Fragment>