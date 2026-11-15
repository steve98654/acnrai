#!/usr/bin/env bash
# Builds every mark x style into ../ as PDF, SVG and PNG (needs pdflatex + poppler).
set -euo pipefail
cd "$(dirname "$0")"
declare -A NAME=([A]=01A-master-lockup [D]=01D-integral-stem [E]=01E-risk-to-trust [I]=01I-cobrand-lockup)
for v in A D E I; do for s in dark light white black; do
  out="${NAME[$v]}_${s}"
  pdflatex -interaction=batchmode -jobname="$out" "\def\V{$v}\def\S{$s}\input{logos.tex}" >/dev/null
  mkdir -p "../${NAME[$v]}"
  mv "$out.pdf" "../${NAME[$v]}/"
  pdftocairo -svg "../${NAME[$v]}/$out.pdf" "../${NAME[$v]}/$out.svg"
  if [[ $s == white || $s == black ]]; then
    pdftocairo -png -transp -r 600 -singlefile "../${NAME[$v]}/$out.pdf" "../${NAME[$v]}/$out"
  else
    pdftocairo -png -r 600 -singlefile "../${NAME[$v]}/$out.pdf" "../${NAME[$v]}/$out"
  fi
  rm -f "$out.aux" "$out.log"
done; done
