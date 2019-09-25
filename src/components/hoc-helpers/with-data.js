import React from 'react';

import Spiner from '../spinner';

const withData = (View) => {
    return class extends React.Component {
        constructor() {
            super();

            this.state = {
                data: null
            };
        }

        componentDidUpdate(prevProps){
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        update() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data: data
                    });
                });
        }

        render() {
            const { data } = this.state;

            if (!data) {
                return <Spiner />
            }

            return <View {...this.props} data={data} />
        }
    }
}

export default withData;