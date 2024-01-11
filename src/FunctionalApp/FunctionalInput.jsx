import { useState, useRef } from "react";

export function TextInput({ labelText, inputProps }) {
  return (
    <div className="input-wrap">
      <label>{labelText}:</label>
      <input {...inputProps} />
    </div>
  );
}

export function PhoneInput({ labelText, phoneSetter }) {
  const [phoneNumber, setPhone] = useState(["", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef()];

  function createChangeEvent(index) {
    return (e) => {
      const lengths = [2, 2, 2, 1];

      if (e.target.value.length <= lengths[index]) {
        const newPhoneNumber = phoneNumber.map((phoneInput, phoneInputIndex) =>
          index == phoneInputIndex ? e.target.value : phoneInput
        );
        setPhone(newPhoneNumber);
        phoneSetter(newPhoneNumber.join(""));
      }

      if (index != 3) {
        const nextRef = refs[index + 1];
        if (lengths[index] == e.target.value.length) {
          nextRef.current?.focus();
        }
      }
      if (index != 0) {
        const prevRef = refs[index - 1];
        if (e.target.value.length == 0) {
          prevRef.current?.focus();
        }
      }
    };
  }

  return (
    <div className="input-wrap">
      <label htmlFor="phone">{labelText}:</label>
      <div id="phone-input-wrap">
        <input
          type="text"
          id="phone-input-1"
          placeholder="55"
          ref={refs[0]}
          value={phoneNumber[0]}
          onChange={createChangeEvent(0)}
        />
        -
        <input
          type="text"
          id="phone-input-2"
          placeholder="55"
          ref={refs[1]}
          value={phoneNumber[1]}
          onChange={createChangeEvent(1)}
        />
        -
        <input
          type="text"
          id="phone-input-3"
          placeholder="55"
          ref={refs[2]}
          value={phoneNumber[2]}
          onChange={createChangeEvent(2)}
        />
        -
        <input
          type="text"
          id="phone-input-4"
          placeholder="5"
          ref={refs[3]}
          value={phoneNumber[3]}
          onChange={createChangeEvent(3)}
        />
      </div>
    </div>
  );
}
