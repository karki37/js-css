import styles from "./App.css";

const ferrari = "luxurious cars";
const location = "Los Angeles";

const features = "heated seats";

function Brands() {
  return (
    <div className={styles.cars}>
      <h1>Luxurious cars-Ferrari</h1>

      <img
        src="https://hips.hearstapps.com/hmg-prod/images/ferrari-vision-gt-front-02-1669644677.jpg?crop=0.566xw:1.00xh;0.216xw,0&resize=640:*"
        alt="silver ferrari"
      />
      <br />
      <p>
        The {ferrari} with {features} you may love to buy at {location}. Let me
        know if you need any help regarding ferrari.
      </p>

      <footer>
        <p className={styles.footer}>Copyright &copy;. All right reserved.</p>
      </footer>
    </div>
  );
}
export default Brands;
