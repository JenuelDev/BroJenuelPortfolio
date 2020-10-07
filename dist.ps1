if (Test-Path .\..\MisterJ936) {
     if (Test-Path .\..\MisterJ936\dist) {
          Write-Warning "Removing Dist in MisterJ936..."
          Remove-Item ".\..\MisterJ936\dist"
     }
     Write-Warning "Copying Dist to MisterJ936..."
     Copy-Item -Path ".\dist" -Destination ".\..\MisterJ936"
} else {
     Write-Warning "Directory MisterJ936 Doesnt Exist"
}