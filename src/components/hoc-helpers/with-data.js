import React from 'react';

import Spiner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View, getData) => {
    return class extends React.Component {
        constructor() {
            super();

            this.state = {
                data: null
            };
        }

        componentDidMount() {
            getData()
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