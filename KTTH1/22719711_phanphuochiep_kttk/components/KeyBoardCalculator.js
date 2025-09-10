import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function KeyBoardCalculator({displayValueIn = 0}) {
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplayValue('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '×':
        return firstOperand * secondOperand;
      case '÷':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleEquals = () => {
    if (firstOperand === null || operator === null) {
      return;
    }

    const inputValue = parseFloat(displayValue);
    const result = calculate(firstOperand, inputValue, operator);
    
    setDisplayValue(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <View style={styles.container}>

      {/* ban phim */}
      <View style={styles.keypad}>
        {/* dong 1: xóa, chuyen doi am duong, phan tram, chia */}
        <View style={styles.row}>
          <Pressable
            style={styles.button}
            onPress={() => clearDisplay()}
          >
            <Text style={styles.buttonText}>C</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              setDisplayValue(
                displayValue.charAt(0) === '-' ? displayValue.substring(1) : '-' + displayValue
              );
            }}
          >
            <Text style={styles.buttonText}>+/-</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              const value = parseFloat(displayValue);
              setDisplayValue(String(value / 100));
            }}
          >
            <Text style={styles.buttonText}>%</Text>
          </Pressable>
          <Pressable
            style={styles.operationButton}
            onPress={() => performOperation('÷')}
          >
            <Text style={styles.buttonText}>÷</Text>
          </Pressable>
        </View>

        {/* dong 2: 7, 8, 9, x */}
        <View style={styles.row}>
          <Pressable
            style={styles.button}
            onPress={() => inputDigit(7)}
          >
            <Text style={styles.buttonText}>7</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => inputDigit(8)}
          >
            <Text style={styles.buttonText}>8</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => inputDigit(9)}
          >
            <Text style={styles.buttonText}>9</Text>
          </Pressable>
          <Pressable
            style={styles.operationButton}
            onPress={() => performOperation('×')}
          >
            <Text style={styles.buttonText}>×</Text>
          </Pressable>
        </View>

        {/* dong 3: 4,5,6,- */}
        <View style={styles.row}>
          <Pressable
            style={styles.button}
            onPress={() => inputDigit(4)}
          >
            <Text style={styles.buttonText}>4</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => inputDigit(5)}
          >
            <Text style={styles.buttonText}>5</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => inputDigit(6)}
          >
            <Text style={styles.buttonText}>6</Text>
          </Pressable>
          <Pressable
            style={styles.operationButton}
            onPress={() => performOperation('-')}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
        </View>

        {/* dong 4: 1, 2, 3,+ */}
        <View style={styles.row}>
          <Pressable
            style={styles.button}
            onPress={() => inputDigit(1)}
          >
            <Text style={styles.buttonText}>1</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => inputDigit(2)}
          >
            <Text style={styles.buttonText}>2</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => inputDigit(3)}
          >
            <Text style={styles.buttonText}>3</Text>
          </Pressable>
          <Pressable
            style={styles.operationButton}
            onPress={() => performOperation('+')}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>

        {/* dong 5: 0,.,= */}
        <View style={styles.row}>
          <Pressable
            style={[styles.button, { flex: 2 }]}
            onPress={() => inputDigit(0)}
          >
            <Text style={styles.buttonText}>0</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => inputDecimal()}
          >
            <Text style={styles.buttonText}>.</Text>
          </Pressable>
          <Pressable
            style={styles.operationButton}
            onPress={() => handleEquals()}
          >
            <Text style={styles.buttonText}>=</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  display: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#202020',
  },
  displayText: {
    fontSize: 70,
    color: 'white',
  },
  keypad: {
    flex: 5,
    backgroundColor: '#202020',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#303030',
    backgroundColor: '#505050',
  },
  operationButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#303030',
    backgroundColor: '#FF9500',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});