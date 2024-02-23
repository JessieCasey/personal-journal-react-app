import { useContext } from 'react';
import styles from './SelectUser.module.css';
import { UserContext } from '../../context/user.context';

function SelectUser() {
	const { userId, setUserId } = useContext(UserContext);

	const changeUser = (e) => {
		setUserId(Number(e.target.value));
	};
	
	return (
		<select className={styles['select']} name="user" id="user" value={userId} onChange={changeUser}>
			<option value="1">Artem</option>
			<option value="2">Anna</option>
			<option value="2">Mark</option>
			<option value="2">Demyan</option>
		</select>
	);
}

export default SelectUser;