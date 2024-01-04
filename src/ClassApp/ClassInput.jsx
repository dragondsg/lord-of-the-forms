import { Component, createRef } from "react";

export class TextInput extends Component {
    render() {
        return (
            <div className="input-wrap">
                <label>{this.props.labelText}:</label>
                <input {...this.props.inputProps} />
            </div>
        );
    }
}

export class PhoneInput extends Component {
    state = {
        phoneNumber: ['','','',''],
    };

    render() {
        const refs = [createRef(), createRef(), createRef(), createRef()];

        const createChangeEvent = (index) => {
            return (e) => {
                const lengths = [2, 2, 2, 1];

                const newPhoneNumber = this.state.phoneNumber.map((phoneInput, phoneInputIndex) =>
                    index == phoneInputIndex ? e.target.value : phoneInput);
                this.setState({
                    phoneNumber: newPhoneNumber,
                });
                this.props.phoneSetter(newPhoneNumber.join(''));

                if (index != 3) {
                    const nextRef = refs[index+1];
                    if (lengths[index] == e.target.value.length) {
                        nextRef.current?.focus();
                    }
                }
                if (index != 0) {
                    const prevRef = refs[index-1];
                    if (e.target.value.length == 0) {
                        prevRef.current?.focus();
                    }
                }
            };
        };

        return (
            <div className="input-wrap">
                <label htmlFor="phone">{this.props.labelText}:</label>
                <div id="phone-input-wrap">
                    <input type="text"
                    id="phone-input-1"
                    placeholder="55"
                    ref={refs[0]}
                    value={this.state.phoneNumber[0]}
                    onChange={createChangeEvent(0)} />
                    -
                    <input type="text"
                    id="phone-input-2"
                    placeholder="55"
                    ref={refs[1]}
                    value={this.state.phoneNumber[1]}
                    onChange={createChangeEvent(1)} />
                    -
                    <input type="text"
                    id="phone-input-3"
                    placeholder="55"
                    ref={refs[2]}
                    value={this.state.phoneNumber[2]}
                    onChange={createChangeEvent(2)} />
                    -
                    <input type="text"
                    id="phone-input-4"
                    placeholder="5"
                    ref={refs[3]}
                    value={this.state.phoneNumber[3]}
                    onChange={createChangeEvent(3)} />
                </div>
            </div>
        );
    }
}