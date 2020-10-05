if (Test-Path .\..\MisterJ936) {
     Write-Host "Directory MisterJ936 Doesnt Exist"
     if (Test-Path .\..\MisterJ936\dist) {
          Remove-Item ".\..\MisterJ936\dist"
     }
     Copy-Item -Path ".\dist" -Destination ".\..\MisterJ936" -Recurse
} else {
     Write-Warning "Directory MisterJ936 Doesnt Exist"
}