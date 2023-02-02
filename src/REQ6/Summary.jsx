function Summary() {
  return (
    <div className="card mb-4">
      <div className="card-header py-3">
        <h5 className="mb-0">Resumen del pedido</h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Platos
            <span>s/. 520</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            IGV
            <span>s/. 93.60</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total</strong>
            </div>
            <span>
              <strong>s/. 613.60</strong>
            </span>
          </li>
        </ul>

        <button type="button" className="btn btn-primary btn-lg btn-block">
          Ir a pagar
        </button>
      </div>
    </div>
  );
}

export default Summary;
