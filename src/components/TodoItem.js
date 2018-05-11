import React, { Component } from "react";
import styled from "styled-components";

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <Container onClick={() => onToggle(id)}>
                <Remove
                    onClick={e => {
                        e.stopPropagation();
                        onRemove(id);
                    }}
                >
                    &times;
                </Remove>
                <Text checked={checked}>{text}</Text>
                {checked && <CheckedMark checked={checked}>✓</CheckedMark>}
            </Container>
        );
    }
}

//
// ----- Style -------------------------------------
//

const Container = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.15s;
    user-select: none; /* 드래그 방지 */

    &:hover {
        background: #e3fafc;
    }

    /* 메모마다 경계선 설정 */
    & + & {
        border-top: 1px solid #f1f3f5;
    }
`;

const Remove = styled.div`
    margin-right: 1rem;
    color: #e64980;
    font-weight: 600;
    opacity: 0;

    /* 부모컴포넌트가 hover될 때 적용 */
    ${Container}:hover & {
        opacity: 1;
    }
`;

const Text = styled.div`
    flex: 1;
    word-break: break-all;
    font-size: 1.2rem;

    color: ${props => (props.checked ? "#adb5bd" : "none")};
    text-decoration: ${props => (props.checked ? `line-through` : `none`)};
`;

const CheckedMark = styled.div`
    font-size: 1.5rem;
    line-height: 1rem;
    margin-left: 1rem;
    color: #3bc9db;
    font-weight: 800;
`;

export default TodoItem;
