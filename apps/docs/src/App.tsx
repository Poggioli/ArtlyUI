import { Button } from "@artly-ui/button";
import { deepPurpleAndAmberTheme, indigoPinkTheme } from "@artly-ui/core";
import { HeartFilledIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <>
      <div className={`App ${indigoPinkTheme.className}`}>
        <Button color="unstyled">
          Test <HeartFilledIcon />
        </Button>
        <Button color="primary">
          Test <HeartFilledIcon />
        </Button>
        <Button color="secondary">
          Test <HeartFilledIcon />
        </Button>
        <Button color="accent">
          Test <HeartFilledIcon />
        </Button>
        <Button color="error">
          Test <HeartFilledIcon />
        </Button>
        <Button color="unstyled" shape="flat">
          Test
        </Button>
        <Button color="primary" shape="flat">
          Test
        </Button>
        <Button color="secondary" shape="flat">
          Test
        </Button>
        <Button color="accent" shape="flat">
          Test
        </Button>
        <Button color="error" shape="flat">
          Test
        </Button>
        <Button color="unstyled" as="a" href="https://www.google.com">
          Test
        </Button>
        <Button color="primary" as="a" href="https://www.google.com">
          Test
        </Button>
        <Button color="secondary" as="a" href="https://www.google.com">
          Test
        </Button>
        <Button color="accent" as="a" href="https://www.google.com">
          Test
        </Button>
        <Button color="error" as="a" href="https://www.google.com">
          Test
        </Button>
      </div>
      <div className={`App ${deepPurpleAndAmberTheme.className}`}>
        <Button color="unstyled">
          Test <HeartFilledIcon />
        </Button>
        <Button color="primary">
          Test <HeartFilledIcon />
        </Button>
        <Button color="secondary">
          Test <HeartFilledIcon />
        </Button>
        <Button color="accent">
          Test <HeartFilledIcon />
        </Button>
        <Button color="error">
          Test <HeartFilledIcon />
        </Button>
        <Button color="unstyled" shape="flat">
          Test
        </Button>
        <Button color="primary" shape="flat">
          Test
        </Button>
        <Button color="secondary" shape="flat">
          Test
        </Button>
        <Button color="accent" shape="flat">
          Test
        </Button>
        <Button color="error" shape="flat">
          Test
        </Button>
        <Button color="unstyled" as="a" href="https://www.google.com">
          Test
        </Button>
        <Button color="primary" as="a" href="https://www.google.com">
          Test
        </Button>
        <Button color="secondary" as="a" href="https://www.google.com">
          Test
        </Button>
        <Button color="accent" as="a" href="https://www.google.com">
          Test
        </Button>
        <Button color="error" as="a" href="https://www.google.com">
          Test
        </Button>
      </div>
    </>
  );
}

export default App;
