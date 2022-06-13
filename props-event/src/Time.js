//Time.js (자식 컴포넌트)
import React from 'react';

function Time({ today, onChangeBackground }) {
    return (
        <div>
            <h2>What Time?</h2>
            <p>{today}</p>
            <div>
                <button
                    type="button"
                    value={'red'}
                    onClick={(e) => {
                        onChangeBackground(e.target.value);
                    }}
                >
                    RED
                </button>
                <button
                    type="button"
                    value={'green'}
                    onClick={(e) => {
                        onChangeBackground(e.target.value);
                    }}
                >
                    GREEN
                </button>
                <button
                    type="button"
                    value={'blue'}
                    onClick={(e) => {
                        onChangeBackground(e.target.value);
                    }}
                >
                    BLUE
                </button>
            </div>
        </div>
    );
}

export default Time;
