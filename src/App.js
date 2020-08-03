import React, { useState, useEffect } from 'react';
import FilterMenu from './components/FilterMenu.jsx';
import Habit from './components/Habit.jsx';
import Memo from './components/Memo.jsx';
import Input from './components/Input.jsx';

export default function App() {
	const [memos, setMemos] = useState(JSON.parse(localStorage.getItem('memos') || []));
	const [menus, setMenus] = useState(['Work', 'Life', 'Hobby', 'Wish', 'Health', 'Habit']);
	const [habits, setHabits] = useState(
		JSON.parse(localStorage.getItem('memos')).filter((memo) => memo.menu === 'habit')
	);

	// ! * componentDidMount
	useEffect(() => {
		// setMemos(JSON.parse(localStorage.getItem('memos')));
		// setHabits(memos.filter((memo) => memo.menu === 'habit'));
	}, []);

	// ! * Habit - habit 추가/삭제되었을 떄 Update
	useEffect(() => {
		setHabits(JSON.parse(localStorage.getItem('memos')).filter((memo) => memo.menu === 'habit'));
	}, [habits.length]);

	// ! * Memo
	// * memos.length 바뀌면 달리 보여줘야됨
	// * 메모 추가되었을 경우
	useEffect(() => {
		// setMemos(JSON.parse(localStorage.getItem('memos') || []));
		console.log(memos.length);
	}, [memos.length]);

	// * deleteMemo
	const deleteMemo = (deleteID) => {
		const newMemos = memos.filter((memo) => memo.id !== deleteID);
		localStorage.setItem('memos', JSON.stringify(newMemos));
		setMemos(newMemos);
		// setTodos(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
	};

	// * editMemo
	const editMemo = (memo) => {
		console.log(memo.target);
		// console.log(memo.menu);
		const text = memo.target.innerText;
		const menu = memo.target.menu;
		const id = memo.target.id;

		// deleteMemo(id);
		console.log(`text : ${text}, menu: ${menu} , id : ${id}`);
		// * input 태그에 넣어줘야하는데..
	};

	return (
		<div className="App">
			<Habit habits={habits} />
			<FilterMenu />
			<Memo memos={memos} deleteMemo={deleteMemo} editMemo={editMemo} />
			<Input />
		</div>
	);
}
