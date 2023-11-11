#/bin/sh

if [ $# -eq 0 ]; then
  echo "No files provided. Exiting."
  exit 1
fi

for politician in $@ ; do
  politician=$(printf "$politician")
  politician=${politician#content/politician}
  politician=${politician%.md}
  git blame -e -c "content/politician/$politician.md" > "content/blame/$politician.txt"
done
