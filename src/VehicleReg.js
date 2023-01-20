import './App.css';

export default function VehicleReg(props) {
  const {type, defaultValue} = props;
  return (
    <input type={type} defaultValue={defaultValue}></input>
  );
}
