#!/bin/bash
recent_file=$(ls -t1 | head -n 1)
chmod +x *
git add .
git commit -m "$recent_file"
git push