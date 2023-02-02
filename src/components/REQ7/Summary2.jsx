function Summary2(props) {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{props.dish}</h6>
          <small className="text-muted">{props.rest}</small>
        </div>
        <span className="text-muted">{props.price}</span>
      </li>
    </div>
  );
}

export default Summary2;
