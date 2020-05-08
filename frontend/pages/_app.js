import App from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <div>
        <Page>
          <Component />
        </Page>
      </div>
    );
  }
}

export default MyApp;
