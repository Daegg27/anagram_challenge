# Don't forget to run your tests!

def is_character_match(string1, string2):
	new_string1 = string1.lower()
	new_string2 = string2.lower()
	seperated_string1 = []
	seperated_string2 = []
	for char in range(0, len(new_string1)):
		seperated_string1.append(new_string1[char])
	for chars in range(0, len(new_string2)):
		seperated_string2.append(new_string2[chars])
	seperated_string1.sort()
	seperated_string2.sort()
	new_string1 = "".join(seperated_string1)
	new_string2 = "".join(seperated_string2)
	
	if len(string1) != len(string2):
		return False
	elif new_string1 == new_string2:
		return True
	else:
		return False
	




# print(is_character_match("HWDAKda", "nODWA"))