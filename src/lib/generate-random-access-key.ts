const KEY_SIZE = 15;

export function generateRandomAccessKey() {
	const keyStringArray: string[] = [];
	for (let i = 0; i < KEY_SIZE; i++) {
		const randomIndex = Math.floor(Math.random() * accessKeyCharacters.length);
		keyStringArray.push(accessKeyCharacters[randomIndex]!);
	}
	return keyStringArray.join('');
}

const accessKeyCharacters = [
	'A',
	'Q',
	'g',
	'w',
	'B',
	'R',
	'h',
	'x',
	'C',
	'S',
	'i',
	'y',
	'D',
	'T',
	'j',
	'z',
	'E',
	'U',
	'k',
	'0',
	'F',
	'V',
	'l',
	'1',
	'G',
	'W',
	'm',
	'2',
	'H',
	'X',
	'n',
	'3',
	'I',
	'Y',
	'o',
	'4',
	'J',
	'Z',
	'p',
	'5',
	'K',
	'a',
	'q',
	'6',
	'L',
	'b',
	'r',
	'7',
	'M',
	'c',
	's',
	'8',
	'N',
	'd',
	't',
	'9',
	'O',
	'e',
	'u',
	'P',
	'f',
	'v',
	'_',
];
