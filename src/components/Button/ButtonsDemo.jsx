import Button from "./Button";
import styles from "./ButtonsDemo.module.scss";

const ButtonsDemo = () => {
  return (
    <section className={styles.section}>
      <Button>Submit</Button>
      <Button disabled>Submit</Button>
      <Button sharp>Submit</Button>
      <Button outline>Buy now</Button>
      <Button outline sharp>
        Buy now
      </Button>
      <Button cta flat>
        Buy now
      </Button>
      <Button cta sharp>
        Buy now
      </Button>
      <Button cta rounded>
        Buy now
      </Button>
      <Button cta large bump>
        Buy now
      </Button>
      <Button to="/" cta small>
        homepage
      </Button>
      <Button full>Buy now</Button>
      <Button large>Buy now</Button>
      <Button bump>submit</Button>
      <Button small rounded>
        submit
      </Button>
      <Button blue rounded>
        submit
      </Button>
      <Button blue large>
        submit
      </Button>
      <Button blue full sharp>
        submit
      </Button>
      <Button ctaOutline large>
        buy now
      </Button>
      <Button blueOutline small>
        submit
      </Button>
      <Button blueOutline bump rounded>
        buy now
      </Button>
      <Button blueOutline large bump>
        submit
      </Button>
      <Button blueOutline large flat>
        submit
      </Button>
      <Button blue flat rounded large>
        submit
      </Button>
      <Button to="/" blue large flat>
        homepage
      </Button>
    </section>
  );
};
export default ButtonsDemo;
