#!/bin/bash
echo "Clearing processes!"

ps

TARGETS=("java" "MainThread" "npm run dev" "esbuild")

for NAME in "${TARGETS[@]}"; do
	
	echo "Searching $NAME"

	if pgrep -x "$NAME" > /dev/null; then
		echo "Encerrando $NAME"
		PIDS=($(pgrep -x "$NAME"))

		for PID in "${PIDS[@]}"; do
			kill $PID
		done
	else
		echo "Processo não encontrado."
	fi

	sleep 1

done
ps

tailscale down

echo "Done!"
